import Map from "@/components/map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold mx-auto text-center pt-2">
          Estação meteorológica ETE José David Gil Rodrigues
        </h1>
        <p className="text-center md:text-lg text-base text-gray-800">
          A estação meteorológica da ETE José David Gil Rodrigues foi construída
          em 2024 pelos alunos e ex-alunos da ETE
        </p>
      </div>
      <div className="flex flex-col space-y-4 py-4">
        <div className="w-full px-4 md:px-0 md:w-1/2 mx-auto">
          <form>
            <Label aria-disabled className="opacity-50">
              Busque por uma de nossas estações
            </Label>
            <div className="flex items-center space-x-2">
              <Input disabled placeholder="ETE Gil Rodrigues" />
              <Button disabled>Buscar</Button>
            </div>
            <span className="text-xs underline underline-offset-2 opacity-40">
              Função desabilitada no momento
            </span>
          </form>
        </div>
        <div className="h-96 w-full md:w-1/2 px-4 md:px-0 mx-auto">
          <Map
            markers={[
              {
                name: "Estação ETE Gil Rodrigues",
                position: [-8.139346734349745, -34.945850832525984],
                url: "gil-rodrigues",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
