// src/components/InputDetail.tsx
type InputDetailProps = {
  name: string
  placeholder: string
}

export default function InputDetail({name, placeholder}: InputDetailProps) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="input"
        type="text"
      ></input>
    </div>
  )
}
