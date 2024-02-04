import NavLinks from '@/components/NavLinks'

export default function SideNav() {
  return (
    <nav className="flex flex-col items-end">
      <span className="text-primary text-3xl p-4 tracking-wider small-caps">GoTah</span>
      <NavLinks />
    </nav>
  )
}
