import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import headerStyle from "../Header/header.module.scss";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const links = [
  { href: 'https://app.blockops.sh/create-project', label: 'Managed Nodes' },
  { href: 'https://blockops-docs.gitbook.io/blockops', label: 'Validated Nodes' },
  { href: 'https://blockops-docs.gitbook.io/blockops', label: 'App Services' },
  { href: 'https://data.blockops.network/', label: 'Blockchain Data Store' },
]

export default function ProductNav() {
  return (
    <div className="absolute right-[580px] top-50px w-30">
    <Menu>
      <Menu.Button className={`${headerStyle.header_content_action_link} z-99999999999`}>
        Products
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Menu.Items className="absolute top-[60px] pl-4 pr-4 pb-2 pt-2 left-[0px] right-0 w-[300px] z-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none grid grid-cols-1 divide-y-0">
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item  key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? 'text-[#2074FF] hover:bg-#E5E5E5-600': 'text-black'
                  
                } `}
              >
                <div className='flex flex-col p-1.5'>
                {link.label}

                </div>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  </div>
  )
}