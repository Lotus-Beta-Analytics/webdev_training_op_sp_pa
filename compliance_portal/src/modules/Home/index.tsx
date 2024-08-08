import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={`${style.background} h-full flex gap-4 p-12 text-white`}>
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <h4 className="text-xl">Welcome to the</h4>
        <hr className="w-48 bg-white" />
        <h1 className="text-6xl">Quality Compliance Portal</h1>
        {/* <Link
          to={"/dashboard"}
          className="mt-4 py-3 px-4 bg-white text-black w-32 text-center rounded"
        >
          Proceed
        </Link> */}
        {/* <Button variant={"secondary"} className="" children="Proceed" /> */}
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        <div className="bg-white text-gray-900 rounded p-8 w-1/2">
          <h3 className="text-3xl">Hello,</h3>
          <h4 className="text-lg">Please enter your login details.</h4>
          <form
            action=""
            onSubmit={() => {
              //TODO: show handling form data and submitting form Data
              navigate("/dashboard");
            }}
          >
            <div className="my-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="my-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="flex justify-end">
              <Button variant={"default"} type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="flex-1 flex flex-col items-center justify-center text-black w-full rounded">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Hello There!</CardTitle>
            <CardDescription>Please enter your credentials.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div> */}

      {/* <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
    </div>
  );
};

export default Home;
