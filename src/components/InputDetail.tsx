// src/components/InputDetail.tsx
type InputDetailProps = {
  placeholder: string
}

export default function InputDetail({placeholder}: InputDetailProps) {
  return (
    <div>
      <input placeholder={placeholder}></input>
    </div>
  )
}
