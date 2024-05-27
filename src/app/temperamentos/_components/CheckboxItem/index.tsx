'use client'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxItem = ({
  onCheckedChange,
  text,
  id,
  checked,
}: {
  id: number
  text: string
  onCheckedChange: (checked: CheckedState) => void
  checked: boolean
}) => {
  const stringId = String(id)
  return (
    <Label
      htmlFor={stringId}
      className="text-sm lg:text-lg cursor-pointer flex gap-4 items-center"
    >
      <Checkbox
        id={stringId}
        onCheckedChange={onCheckedChange}
        checked={checked}
      />
      <span>{text}</span>
    </Label>
  )
}

export default CheckboxItem
