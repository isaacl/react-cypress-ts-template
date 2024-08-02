// src/components/InputDetail.tsx
type InputDetailProps = {
  name: string
  value: string
  placeholder: string
}

export default function InputDetail({
  name,
  value,
  placeholder,
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
        className="input"
        type="text"
      ></input>
    </div>
  )
}
