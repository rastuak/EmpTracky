/* eslint-disable react/prop-types */
import { MagnifyingGlass } from '@phosphor-icons/react'

const SearchBar = ({setKeyword}) => {
  return (
    <div className="w-full h-[44px] relative">
      <MagnifyingGlass size={40} className="text-emptracky-blue absolute right-3 hover:cursor-pointer" />
      <input placeholder="Search employee name..." onChange={(e) => setKeyword(e.target.value)} className="w-full h-[44px] rounded-[12px] pl-3 pr-4 focus:outline-emptracky-blue" />
    </div>
  )
}

export default SearchBar