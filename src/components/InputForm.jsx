function InputForm({ label, required = '', placeholder, type = 'text' }) {
    return (
        <label>
            <p>{label}<span>{` ${required}`}</span></p>
            <input type={type} placeholder={placeholder} />
        </label>
    )
}

export default InputForm