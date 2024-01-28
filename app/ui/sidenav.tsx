import NavLinks from '@/app/ui/nav-links'
export default function SideNav() {
  return (
    <nav className='flex flex-col items-end'>
      <span className='text-primary text-3xl p-4 tracking-wider small-caps'>GoTah</span>
      <NavLinks />
    </nav>
  )
}
