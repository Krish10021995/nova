"use client";

import * as React from "react";
import { topProducts } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TopProducts() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Top products</CardTitle>
        <CardDescription>By revenue this month</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">Users</TableHead>
              <TableHead className="text-right">Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-right">
                  ${product.revenue}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {product.users}
                </TableCell>
                <TableCell className="text-right font-medium text-emerald-600 dark:text-emerald-400">
                  {product.growth}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}