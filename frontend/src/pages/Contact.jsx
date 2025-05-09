import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 p-5 gap-5 my-10">
      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57593.88470341693!2d87.5276708157956!3d25.551105274675308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faa98e3815bc69%3A0x7415bf2c57ddfb17!2sKatihar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1746772858949!5m2!1sen!2sin"
          height={"100%"}
          width={"100%"}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
      <Card className="">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>We’d love to hear from you. Fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              {/* Comment */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="comment">Comment</Label>
                <Textarea id="comment" placeholder="Write your message..."  className={"resize-none"} rows={4} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>

          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Contact
