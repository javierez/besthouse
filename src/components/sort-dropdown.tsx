"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

interface SortDropdownProps {
  slugString: string;
}

export function SortDropdown({ slugString }: SortDropdownProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm">
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Ordenar
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Ordenar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=default`} className="w-full">
            Destacados primero
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=newest`} className="w-full">
            Más recientes
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=price-asc`} className="w-full">
            Precio: menor a mayor
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=price-desc`} className="w-full">
            Precio: mayor a menor
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=size-asc`} className="w-full">
            Tamaño: menor a mayor
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${slugString}?sort=size-desc`} className="w-full">
            Tamaño: mayor a menor
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
