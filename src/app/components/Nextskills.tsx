import React from 'react'
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
const Nextskills = (props:any) => {
  return (
    <>
     <div className="mt-10">
     
                  <Card className="sm:w-[200px] sm:h-[200px]  bg-black">
                    <CardBody className="sm:justify-center sm:items-center pb-0">
                      <CircularProgress
                        classNames={{
                          svg: "w-36 h-36 drop-shadow-md",
                          indicator: "stroke-[#F7F779]",
                          track: "stroke-white/10",
                          value: "text-3xl font-semibold text-white",
                        }}
                        value={props.tittle}
                        strokeWidth={2}
                        showValueLabel={true}
                      />
                    </CardBody>
                    <CardFooter className="justify-center items-center pt-0">
                      <Chip
                        classNames={{
                          base: "border-2 border-white/30",
                          content: "text-white/90 text-small font-semibold",
                        }}
                        variant="bordered"
                      >
                      {props.heading}
                      </Chip>
                    </CardFooter>
                  </Card>
                </div>

    </>
  )
}

export default Nextskills