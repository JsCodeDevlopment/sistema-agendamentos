"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import dayjs from "dayjs";

interface AvailabilityListProps {
  isDateSelected: boolean;
  selectedDate: Date | null | undefined;
  availability:
  | {
    availableTimes: number[] | undefined;
    possibleTimes: number[];
  }
  | null
  | undefined;
  handleSelectTime: (hour: number) => void;
}

const AvailabilityList: React.FC<AvailabilityListProps> = ({
  isDateSelected,
  selectedDate,
  availability,
  handleSelectTime,
}) => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "vertical",
  );

  // Função para determinar a orientação com base no tamanho da tela
  const determineOrientation = () => {
    if (window.innerWidth >= 767 && window.innerHeight < window.innerWidth) {
      setOrientation("vertical");
    } else {
      setOrientation("horizontal");
    }
  };

  // Determinar a orientação inicial ao montar o componente
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    determineOrientation();
    // Adicionar listener de redimensionamento para atualizar a orientação quando a tela for redimensionada
    window.addEventListener("resize", determineOrientation);
    return () => {
      // Remover o listener quando o componente for desmontado
      window.removeEventListener("resize", determineOrientation);
    };
  }, []);

  return (
    <>
      {isDateSelected &&
        availability &&
        availability.availableTimes &&
        availability.availableTimes.length > 0 && (
          <div className="max-h-[22rem] justify-center   flex flex-col gap-1 items-center">
            <h1 className="text-sm font-semibold capitalize truncate text-center md:py-4">
              {selectedDate
                ? dayjs(selectedDate).locale("pt-br").format("dddd, D MMMM")
                : null}
            </h1>

            <ScrollArea className="w-full ">
              <div className="flex items-center pb-3 md:pb-0 md:pr-3  gap-2 flex-row md:flex-col h-full w-full ">
                {availability?.possibleTimes.map((hour) => {
                  return (
                    <Button
                      key={hour}
                      onClick={() => handleSelectTime(hour)}
                      disabled={!availability.availableTimes?.includes(hour)}
                      className="rounded-md w-full "
                      size="sm"
                    >
                      {String(hour).padStart(2, "0")}:00h
                    </Button>
                  );
                })}
              </div>
              <ScrollBar orientation={orientation} />
            </ScrollArea>
          </div>
        )}
    </>
  );
};

export default AvailabilityList;
