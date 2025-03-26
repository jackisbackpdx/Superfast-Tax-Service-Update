const text1 = 'We understand that filing taxes might be difficult. We are here to help you get the most accurate refund you deserve! You can count on us, whether you are filing a simple tax form or even for your business.'
const text2 = 'We are highly qualified and can provide you with all the tools and advice you need. We are happy to answer any questions regarding your tax return - contact us now!'
const text3 = 'With many years of experience working with both your personal and business, our team has a personal, friendly touch and a professional approach.'

const text = [text1, text2, text3]

const textByIndex = (index) => text[index % text.length]

export default textByIndex;