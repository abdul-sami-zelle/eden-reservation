function Heading4({text,color,fontSize,margin,family}) {
    return <>
        <h4 style={
            {
                fontFamily:`${family}`,
                color:`${color}`,
                fontSize:`${fontSize}`,
                margin:`${margin}`
            }
        }>
            {text}
        </h4>
    </>
}
export default Heading4;