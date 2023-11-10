import React from 'react'
import linkedInIcon from '../images/linkedIn.svg'
import gitHubIcon from '../images/gitHub.svg'
import gmailIcon from '../images/gmail.svg'
import thusharaProfilePic from '../images/sampleProfile.png'

export default function About() {
  return (
    <div>
        <div className='mt-10 flex flex-col items-center justify-between'>
            <div className='w-screen flex justify-around'>
                <DeveloperCard role={'Front End'} name={"Thushara Dilshan"} imageUrl={thusharaProfilePic} linkedIn={"www.linkedIn.com"} gmail={'someone@gmail.com'} gitHub={"wwww.github.com"} />
                <DeveloperCard role={"Back End"} name={"Gotabaya Wimukthi"} imageUrl={thusharaProfilePic} linkedIn={"www.linkedIn.com"} gmail={'someone@gmail.com'} gitHub={"www.github.com"} />
            </div>
        </div>
    </div>
  )
}

function DeveloperCard({role, name, imageUrl, linkedIn, gmail, gitHub}){
    return (
        <div className=' shadow-2xl flex flex-col items-center p-10 bg-white rounded-xl w-96 h-3/4 backdrop-blur-sm'>
            <h3 className='text-xl font-bold'>{name}</h3>
            <h3 className='text-sm'>{role}</h3>
            <img src={imageUrl} alt="" width="200px" className='my-10 rounded-full shadow-xl' />
            <div className='flex items-center justify-around w-full'>
                <a href={linkedIn}><img src={linkedInIcon} alt="linkedInIcon" width="45px" /></a>
                <a href={gmail}><img src={gmailIcon} alt="gmailIcon" width="40px" /></a>
                <a href={gitHub}><img src={gitHubIcon} alt="gitHubIcon" width="40px" /></a>
            </div>
        </div>
    )
}
