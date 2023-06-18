/*
 * @Author: rowei
 * @Date: 2020-08-30 23:45:18
 * @LastEditors: rowei
 * @LastEditTime: 2022-06-16 00:36:09
 * @FilePath: /conku/admin/meta_datetime.go
 * @Description:修改时间
 *
 * Copyright (c) 2022 by rowei/conku.com, All Rights Reserved.
 */
package admin

import (
	"fmt"
	"time"

	"github.com/conku/qor"
	"github.com/conku/qor/resource"
	"github.com/conku/qor/utils"
	"gorm.io/gorm"
)

// DatetimeConfig meta configuration used for datetime
type DatetimeConfig struct {
	MinTime  *time.Time
	MaxTime  *time.Time
	ShowTime bool
}

// ConfigureQorMeta configure datetime meta
func (datetimeConfig *DatetimeConfig) ConfigureQorMeta(metaor resource.Metaor) {
	if meta, ok := metaor.(*Meta); ok {
		timeFormat := "2006-01-02"
		if meta.Type == "datetime" {
			datetimeConfig.ShowTime = true
		}

		if meta.Type == "" {
			meta.Type = "datetime"
		}

		if datetimeConfig.ShowTime {
			timeFormat = "2006-01-02 15:04"
		}

		if meta.FormattedValuer == nil {
			meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
				switch date := meta.GetValuer()(value, context).(type) {
				case *time.Time:
					if date == nil {
						return ""
					}
					if date.IsZero() {
						return ""
					}
					return utils.FormatTime(*date, timeFormat, context)
				case time.Time:
					if date.IsZero() {
						return ""
					}
					return utils.FormatTime(date, timeFormat, context)
				case int64:
					return time.Unix(date, 0).Format(timeFormat)
				default:
					return date
				}
			})
		}
	}
}

// ConfigureQORAdminFilter configure admin filter for datetime
// rowei edit
func (datetimeConfig *DatetimeConfig) ConfigureQORAdminFilter(filter *Filter) {
	if filter.Handler == nil {
		if dbName := filter.Resource.GetMeta(filter.Name).DBName(); dbName != "" {
			local, _ := time.LoadLocation("Asia/Shanghai")
			filter.Handler = func(tx *gorm.DB, filterArgument *FilterArgument) *gorm.DB {
				if metaValue := filterArgument.Value.Get("Start"); metaValue != nil {
					if start := utils.ToString(metaValue.Value); start != "" {
						startTime, _ := time.ParseInLocation("2006-01-02 15:04:05", start, local)
						tx = tx.Where(fmt.Sprintf("%v > ?", dbName), startTime.Unix())
					}
				}

				if metaValue := filterArgument.Value.Get("End"); metaValue != nil {
					if end := utils.ToString(metaValue.Value); end != "" {
						endTime, _ := time.ParseInLocation("2006-01-02 15:04:05", end, local)
						tx = tx.Where(fmt.Sprintf("%v < ?", dbName), endTime.Unix())
					}
				}

				return tx
			}
		}
	}
}
