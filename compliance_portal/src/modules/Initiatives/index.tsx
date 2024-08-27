import Layout from "@/layout";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useAddInitiative, useInitiatives } from "@/hooks/initiative";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import hooks from "@/hooks";

const Initiatives = () => {
  const { data: initiativeList } = hooks.useInitiatives();
  const { data: types } = hooks.useTypes();
  const { data: statuses } = hooks.useStatuses();
  const { data: users } = hooks.useUsers();

  const [formData, setFormData] = useState({} as any);

  // ("use client");

  const formSchema = z.object({
    initiative: z.string().min(3, "Minimum of 3 characters"),
    qaEngineer: z.string(),
    date: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initiative: "",
      qaEngineer: "",
      date: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
  }
  const {
    mutate,
    isError: isMutateError,
    isSuccess,
    error,
    reset,
  } = hooks.useAddInitiative();

  if (isError) {
    console.log(`Error feching data ${error}`);
  }

  // const handleChangeOld = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  // // handleChange and handleChangeOld are equivalent

  // const submitHandler = () => {
  //   const payload = {
  //     title: "test",
  //   };
  //   mutate(payload);
  // };

  // "title": "Initiative 4",
  //   "type": "62476993a167a2cb4b16ee2e",
  //   "status": "62476993a167a2cb4b16ee2e",
  //   "qualityAssuranceEngineer": "62476993a167a2cb4b16ee2e"

  console.log({ formData });
  return (
    <Layout title={"Initiatives"}>
      <div className="flex justify-between">
        <Dialog>
          <DialogTrigger>
            <Button variant={"default"} type="button">
              New Initiative
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Initiative</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>

            {/* using shadcn form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initiative</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      {/* <FormDescription>Initiative title.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      {/* <FormDescription></FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualityAssuranceEngineer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>QA Engineer</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="QA Engineer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Intiative Type</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Initiative Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>

            {/* using form */}
            {/* <form
              action=""
              onSubmit={(event) => {
                event.preventDefault();

                mutate(formData);
                window.alert("Payload submitted in form");
              }}
            >
              <div className="w-full">
                <div className="my-4 flex flex-col">
                  <label htmlFor="">Initiative</label>
                  <input
                    className="my-2 p-2 border border-gray-600 rounded"
                    name="initiative"
                    value={formData.initiative}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="my-4 flex flex-col">
                  <label htmlFor="">QA Engineer</label>
                  <input
                    className="my-2 p-2 border border-gray-600 rounded"
                    name="qaEngineer"
                    value={formData.qaEngineer}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-4 flex flex-col">
                  <label htmlFor="">Date</label>
                  <input
                    className="my-2 p-2 border border-gray-600 rounded"
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Submit in form</button>
              </div>
            </form> */}
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {
        // TODO: create a detailed table component
      }
      <Table className="mt-8">
        <TableCaption>A list of your recent initiatives.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initiativeList.map((initiative) => (
            <TableRow key={initiative._id}>
              <TableCell className="font-medium">{initiative.title}</TableCell>
              <TableCell>{initiative.paymentStatus}</TableCell>
              <TableCell>{initiative.paymentMethod}</TableCell>
              {/* <TableCell className="text-right">
                {initiative.status.title}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Dialog />

      {/* <Button variant={"default"} onClick={submitHandler}>
        Submit
      </Button> */}
    </Layout>
  );
};

export default Initiatives;
