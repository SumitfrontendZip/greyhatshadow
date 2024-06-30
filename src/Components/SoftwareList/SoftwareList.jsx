import image from './softwareImage.jpg'
import { v4 as uuidv4 } from 'uuid';
import './SoftwareList.css'
function SoftwareList() {

    const softwareData = [
        {
            id: uuidv4(),
            image: image,
            category: 'software',
            title: 'OTP BOT – OTP Stealer Tool',
            description: 'One-time password (OTP) bots are automated programs attackers can use to extract one-time authentication passwords from users by tricking people into divulging an authentication code that has been sent by email, SMS, or even an authentication app. Once the fraudster is authenticated, they can perform unauthorized actions (like transactions) from MFA-protected accounts.'
        },
        {
            id: uuidv4(),
            image: image,
            category: 'software',
            title: 'OTP BOT – OTP Stealer Tool',
            description: 'One-time password (OTP) bots are automated programs attackers can use to extract one-time authentication passwords from users by tricking people into divulging an authentication code that has been sent by email, SMS, or even an authentication app. Once the fraudster is authenticated, they can perform unauthorized actions (like transactions) from MFA-protected accounts.'
        },
        {
            id: uuidv4(),
            image: image,
            category: 'software',
            title: 'OTP BOT – OTP Stealer Tool',
            description: 'One-time password (OTP) bots are automated programs attackers can use to extract one-time authentication passwords from users by tricking people into divulging an authentication code that has been sent by email, SMS, or even an authentication app. Once the fraudster is authenticated, they can perform unauthorized actions (like transactions) from MFA-protected accounts.'
        },
    ]

    const softwareItem = (image, category, title, description, id) => {
        return (
            <div className='software-wrapper' key={id}>
                <img src={image} alt="" />
                <h4>{category}</h4>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className='none'>Read More...</span>
            </div>
        )
    }

    return (
        <div className='software-list-container'>
            <h2>Softwares</h2>
            <span>Download Clean Softwares Tool By GreyHatShadow For free</span>
            <div className="software-list-wrapper">
                {
                    softwareData.map((software) =>
                        softwareItem(
                            software.image,
                            software.category,
                            software.title,
                            software.description,
                            software.id
                        ))
                }
            </div>
        </div>
    )
}

export default SoftwareList
