import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
const Application = () => {
    const list : object[] = [
        {
          title: "OAPP",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "TangAPP",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "RaspAPP",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
        {
          title: "APP",
          img: "/images/fruit-4.jpeg",
          price: "$5.30",
        },
        {
          title: "AvAPP",
          img: "/images/fruit-5.jpeg",
          price: "$15.70",
        },
        {
          title: "LeAPP",
          img: "/images/fruit-6.jpeg",
          price: "$8.00",
        },
        {
          title: "BAPP",
          img: "/images/fruit-7.jpeg",
          price: "$7.50",
        },
        {
          title: "WaterAPP",
          img: "/images/fruit-8.jpeg",
          price: "$12.20",
        },
      ];
  return (
    <div className="flex justify-center items-center flex-col gap-7">
        <div>
            <h1 className="font-bold text-3xl">
              Some of our apps
            </h1>
        </div>
        <div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item : any, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
        </div>
    </div>
  )
}

export default Application