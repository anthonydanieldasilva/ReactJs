

export const Select = ( {options=[], onSelect} )=>{

    const handleSelect = (resp)=>{
        onSelect (resp.target.value)
    }

    return(

        <select onChange={handleSelect} >
            {
                options.map((opt) =>
                    <option key={opt.value} value={opt.value}>{opt.text}</option>
                )
            }
        </select>

    )
}