import HeaderContent  from "@/components/Header-Content"

import { GetDataNavbar } from "@/lib/fetch"
import { Navbar } from "@/lib/interface"

export default async function Header() {
  const dataNavbar : Navbar = await GetDataNavbar();
  return (
    <HeaderContent data={dataNavbar}/>
  )
}