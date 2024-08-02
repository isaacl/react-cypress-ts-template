import type {ChangeEvent} from 'react'

type InputDetailProps = {
  name: string
  value: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  readOnly?: true
}

export default function InputDetail({
  name,
  value,
  placeholder,
  onChange,
  readOnly,
}: InputDetailProps) {
  return (
    // This needs two additional props:
    // 1) id attr to link label and input field, in a unique way.
    // 2) name attr for <input> is used for data format, and shouldn't
    //   be the same as the label text.
    <div data-cy={`input-detail-${name}`} className="field">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        className="input"
        type="text"
      ></input>
    </div>
  )
}
