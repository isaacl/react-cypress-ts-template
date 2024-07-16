// src/components/ButtonFooter.tsx
import {MouseEvent} from 'react'
import {FaUndo, FaRegSave, FaEdit, FaTrash} from 'react-icons/fa'

type ButtonFooterProps = {
  label: 'Cancel' | 'Save' | 'Edit' | 'Delete'
  IconClass: typeof FaUndo | typeof FaRegSave | typeof FaEdit | typeof FaTrash
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonFooter({
  label,
  IconClass,
  onClick,
}: ButtonFooterProps) {
  return (
    <button
      data-cy={`${label.toLowerCase()}-button`}
      aria-label={label}
      onClick={onClick}
    >
      <IconClass />
      <span>{label}</span>
    </button>
  )
}
