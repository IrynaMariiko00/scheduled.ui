import { cn } from '~/lib/cn'
import { RowActionsMenu } from '~/pages/HomePage/components/RowActionsMenu'
import { StatusBadge } from '~/pages/HomePage/components/StatusBadge'
import {
  SCHEDULE_TABLE_COLUMNS,
  type ScheduleTableColumnKey,
} from '~/pages/HomePage/config/scheduleTableColumns'
import type { Schedule } from '~/types/schedule'

type SchedulesTableProps = {
  schedules: Schedule[]
}

function renderCell(columnKey: ScheduleTableColumnKey, schedule: Schedule, index: number) {
  switch (columnKey) {
    case 'index':
      return index + 1
    case 'status':
      return <StatusBadge status={schedule.status} />
    case 'group':
      return schedule.group
    case 'program':
      return schedule.program
    case 'start':
      return schedule.start
    case 'end':
      return schedule.end
    case 'actions':
      return <RowActionsMenu schedule={schedule} />
  }
}

export const SchedulesTable = ({ schedules }: SchedulesTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-surface shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-gradient-to-r from-accent-violet via-accent-indigo to-accent-blue text-left text-text-inverse">
              {SCHEDULE_TABLE_COLUMNS.map((column) => (
                <th key={column.key} className={column.headerClassName}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => {
              const inactive = schedule.status === 'неактивний'

              return (
                <tr
                  key={schedule.id}
                  className={cn(
                    'border-b border-border transition-colors last:border-b-0',
                    inactive
                      ? 'bg-bg-muted/60 text-text-muted'
                      : index % 2 === 0
                        ? 'bg-bg-surface'
                        : 'bg-bg-muted/30',
                    !inactive && 'hover:bg-accent-indigo/5',
                  )}
                >
                  {SCHEDULE_TABLE_COLUMNS.map((column) => (
                    <td key={column.key} className={column.cellClassName}>
                      {renderCell(column.key, schedule, index)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
