

export const Select = ( {options=[], onSelect} )=>{

    const handleSelect = (resp)=>{
        onSelect (resp.target.value)
    }

    return(

        <select onChange={handleSelect}>
            {
                options.map((opt) =>
                <option key={opt}>{opt}</option>
                )
            }
        </select>

    )
}

/*
<option key={opt.value}></option>
value={opt.value}>{opt.text*/