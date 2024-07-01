import './checkbox.css'

function CheckBox({labelText,isChecked,onChange,id}) {
    return(
        <div>
            <div class="checkbox-wrapper-19">
            <input type="checkbox" id={id} checked={isChecked} onChange={() => onChange(id)} />
            <label for="cbtest-19" class="check-box"/>
            </div>
            {/* <p style={{marginLeft:'10px',color:"#78737C",fontSize:'16px',fontFamily:'Poppins'}}>{labelText}</p> */}
        </div>
        )
        
}

export default CheckBox;