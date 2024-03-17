
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function FormComponent() {
  return (
    <div className="">
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullname" value="FULL NAME (EN)" />
        </div>
        <TextInput id="fullname" type="text" placeholder="susu" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="gender" value="Female" />
        </div>
        <TextInput id="gender" placeholder="Female" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="dateofbirth" value="DATE OF BIRTH" />
        </div>
        <TextInput id="dateofbirth" type="date" required shadow />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="placeofbirth" value="PLACE OF BIRTH" />
        </div>
        <TextInput id="placeofbirth" required shadow />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="currentaddress" value="CURRENT ADDRESS" />
        </div>
        <TextInput id="currentaddress" required shadow />
      </div>
      <Button type="submit">Register new account</Button>
    </form>

    </div>
  );
}



