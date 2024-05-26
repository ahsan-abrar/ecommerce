import { Button, Card, Checkbox, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Card className="p-8 w-1/2">
        <Input
          size="sm"
          color="primary"
          isRequired
          type="email"
          label="Email"
          variant="faded"
          placeholder="junior@nextui.org"
          className="min-w-full"
        />
        <Input
          size="sm"
          color="primary"
          isRequired
          type="password"
          variant="faded"
          label="Password"
          placeholder="********"
          className="min-w-full"
        />
        <div className="flex items-center justify-between">
          <Checkbox defaultSelected size="sm">
            Remember me
          </Checkbox>
          {/* <Link to={"#"} as={RRDLink} size="sm" underline="always"> */}
          Forgot Password?
          {/* </Link> */}
        </div>
        <Button
          fullWidth
          size="md"
          type="submit"
          color="primary"
          variant="shadow"
        >
          Sign in
        </Button>
      </Card>
    </div>
  );
}
