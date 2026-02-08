const getDoctorData=()=>{
 const DoctorStringId=localStorage.getItem('dataId')
 const doctorId=JSON.parse(DoctorStringId)
if(doctorId){
    return doctorId
}
else{
    return []
}

}
const addDoctorData=(id)=>{
    const storedData=getDoctorData()
    const addData=[...storedData,id]
    const perseData=JSON.stringify(addData)
  localStorage.setItem('dataId',perseData)
    return perseData
}

export {addDoctorData,getDoctorData}