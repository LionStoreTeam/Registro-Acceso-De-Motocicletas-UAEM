//components\search.tsx
"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce"; //npm i use-debounce https://www.npmjs.com/package/use-debounce

const BuscarNoPertenecientesUAEM = () => {
  const searchParamsNoPertenecientesUAEM = useSearchParams();
  const pathnameNoPertenecientesUAEM = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParamsNoPertenecientesUAEM);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathnameNoPertenecientesUAEM}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-row mb-5 ml-5 mr-5 bg-blue-200 p-4 rounded-lg gap-8 w-full">
      <input
        type="text"
        className="text-[20px] h-20 w-full rounded-lg border-4 border-blue-400 p-4 focus:border-4 focus:border-blue-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 transition-all ease-in duration-75"
        placeholder="Buscar por Matricula Asignada: 00000000"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParamsNoPertenecientesUAEM.get("query")?.toString()}
      />
    </div>
  );
};

export default BuscarNoPertenecientesUAEM;
