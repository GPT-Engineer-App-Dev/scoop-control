import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Index() {
  const [parlors, setParlors] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const addParlor = () => {
    setParlors([...parlors, { name, location }]);
    setName("");
    setLocation("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Ice Cream Parlor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <Label htmlFor="location">Location</Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <Button onClick={addParlor}>Add Parlor</Button>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Ice Cream Parlors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parlors.map((parlor, index) => (
                  <TableRow key={index}>
                    <TableCell>{parlor.name}</TableCell>
                    <TableCell>{parlor.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Index;