//  src/components/InputDetail.tsx
type InputDetailProps = {
  name: string
  value: string
  placeholder?: string
  readOnly?: boolean
}

export default function InputDetail({
  name,
  value,
  placeholder,
  readOnly,
}: InputDetailProps) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        readOnly={readOnly}
        className="input"
        type="text"
      ></input>
    </div>
  )
}
