




function TableRow(props) {

    const animal = props.element

    return (
        <tr key={animal.email}>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{animal.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{animal.title}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{animal.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{animal.role}</td>
            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {animal.name}</span>
            </a>
            </td>
        </tr>
    )
}
export default  TableRow;
