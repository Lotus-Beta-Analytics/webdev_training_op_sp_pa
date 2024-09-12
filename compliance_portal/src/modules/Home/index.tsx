import React, { useEffect, useState } from "react";
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
import hooks from "@/hooks";
import { isAuthenticated } from "@/utils/authUtils";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useIsMutating } from "@tanstack/react-query";

const Home = () => {
  const navigate = useNavigate();
  const isMutating = useIsMutating();
  const isLoading = Boolean(isMutating);

  useEffect(() => {
    if (isAuthenticated()) {
      console.log("user is authenticated!!!");
      navigate("/dashboard");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({});

  const { mutate, isSuccess, isError, error, reset } = hooks.useLogin();

  // TODO: use proper type for event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // const name = event.target.name;
    // const value = event.target.value;

    // console.log({ name, value });

    setFormData({ ...formData, [name]: value });
  };

  const authenticateUser = () => {
    mutate(formData);
  };

  if (isSuccess) {
    reset();
    toast("Login Successful", {
      // description: new Date().toLocaleString(),
      // action: {
      //   label: "OK",
      //   onClick: () => console.log("OK"),
      // },
      duration: 3000,
      position: "top-right",
    });
    navigate("/dashboard");
  }

  if (isError) {
    reset();
    console.log(`Authentication Error: ${error}`);
  }

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
            onSubmit={(event) => {
              event.preventDefault();
              authenticateUser();
            }}
            // method=""
            // TODO: url? for request
          >
            <div className="my-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-end">
              <Button variant={"default"} type="submit" disabled={isLoading}>
                Login {isLoading && <LoaderCircle className="animate-spin" />}
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
