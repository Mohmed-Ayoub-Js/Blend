import { Button } from "@nextui-org/react"

const About = () => {
  return (
    <div className="flex md:justify-between md:items-center md:flex-row flex-col-reverse">
        <div>
            <h1 className="font-bold text-4xl">
              You can get the logic and backend programs ready with us
            </h1>
            <p className="text-2xl text-gray-600">
            We always help you  
            </p> 
            <Button>
                Get start
            </Button>
        </div>
        <div>
            <img src="https://media.licdn.com/dms/image/D4D12AQGDtWEy4e0cVA/article-inline_image-shrink_1000_1488/0/1657811912984?e=1707955200&v=beta&t=W-YARp1xxZX5yKOm--epYxobzFbFuPxm0IFkTmTwpXA" alt="" className="rounded-lg shadow-lg m-4"/>
        </div>
    </div>
  )
}

export default About