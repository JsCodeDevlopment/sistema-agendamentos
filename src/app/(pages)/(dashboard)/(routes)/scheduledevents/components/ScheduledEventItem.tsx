"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { format, addMinutes } from "date-fns";
import type { IScheduling } from "../interface/interface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Trash2Icon } from "lucide-react";
import { cancelBooking } from "@/actions/scheduling/cancelBooking";
import { useState } from "react";
import { AlertModal } from "@/components/alert-modal";
import { toggleBookingStatus } from "@/actions/scheduling/togleBookingStatus";

interface ScheduledEvent {
  scheduling: IScheduling;
}

const ScheduledEventItem = ({ scheduling }: ScheduledEvent) => {
  const [loading, setLoading] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const endDate = addMinutes(
    new Date(scheduling.date ?? ""),
    scheduling.eventType.duration,
  );

  const handleDelete = async () => {
    try {
      setLoading(true);
      setOpenDelete(true);
      await cancelBooking(scheduling.id, scheduling.userId);
      console.log("deletado com sucesso.");
    } catch (error) {
      console.error("Error ao deletar:", error);
    } finally {
      setLoading(false);
      setOpenDelete(false);
    }
  };

  const handleCancel = async () => {
    try {
      setLoading(true);
      setOpenDelete(true);
      await toggleBookingStatus(scheduling.id, scheduling.userId, "REJECTED");
      console.log(
        `O Agendamento para ${scheduling.eventType.name} às ${format(
          new Date(scheduling.date ?? ""),
          "dd/MM/yyyy às HH:mm",
        )}foi Rejeitado`,
      );
    } catch (error) {
      console.error("Error ao deletar:", error);
    } finally {
      setLoading(false);
      setOpenDelete(false);
    }
  };

  const handleAccept = async () => {
    try {
      setLoading(true);
      await toggleBookingStatus(scheduling.id, scheduling.userId, "ACCEPTED");
      console.log(
        `O Agendamento para ${scheduling.eventType.name} às ${format(
          new Date(scheduling.date ?? ""),
          "dd/MM/yyyy às HH:mm",
        )}foi Rejeitado`,
      );
    } catch (error) {
      console.error("Error ao deletar:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleCancel}
        loading={loading}
      />

      <Accordion type="single" collapsible>
        <AccordionItem className="bg-card my-1" value="item-1">
          <div className="flex gap-1.5 p-4 bg-muted/10 border-y-[1px] border-gray-700 flex-col justify-start">
            <h1 className=" font-semibold">
              {format(new Date(scheduling.date ?? ""), "dd/MM/yyyy")}
            </h1>
            <h1
              className={`${scheduling.status === "PENDING"
                ? "bg-yellow-600"
                : scheduling.status === "ACCEPTED"
                  ? "bg-green-600"
                  : scheduling.status === "REJECTED"
                    ? "bg-red-600"
                    : ""
                }`}
            >
              {scheduling.status}
            </h1>
          </div>
          <div className="flex text-sm  items-center  justify-between gap-1.5 p-4   border-b-[1px] border-gray-700  ">
            <h1 className="">
              {format(new Date(scheduling.date ?? ""), "HH:mm")} às{" "}
              {format(endDate, "HH:mm")}
            </h1>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Everton Carvalho</h1>
              <h1>
                Evento:{" "}
                <span className="font-semibold">
                  {scheduling.eventType.name}
                </span>
              </h1>
            </div>

            <AccordionTrigger className="font-semibold  w-full justify-end text-primary gap-1">
              Detalhes
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="gap-2  flex grid-cols-2  w-full   p-4">
              <div className="w-fit flex-col gap-4 px-5 pt-5 flex">
                <div className="flex gap-2 ">
                  <Button
                    onClick={handleAccept}
                    className="rounded-full gap-1"
                    variant="outline"
                  >
                    <ArrowUpRight size={20} />
                    Aceitar
                  </Button>
                  <Button
                    onClick={() => setOpenDelete(true)}
                    className="rounded-full gap-1"
                    variant="outline"
                  >
                    <Trash2Icon size={20} />
                    Cancelar
                  </Button>
                </div>

                <Link
                  className="flex gap-1 items-center text-base font-light text-blue-500 hover:underline"
                  href={`/dashboard/update/${scheduling.eventType.id}`}
                >
                  <ArrowUpRight size={20} />
                  Edita Tipo do Evento
                </Link>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold uppercase">Email</h1>
                  <p>{scheduling?.email}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold uppercase">Local</h1>
                  <p>{scheduling?.eventType.locationType}</p>
                  {scheduling.eventType.locationType === "PRESENCIAL" && (
                    <div className="flex flex-col">
                      <p className="font-medium">
                        Endereço:
                        <span className="font-normal ">
                          {scheduling?.eventType.address}
                        </span>
                      </p>
                      <p className="font-medium">
                        Capacidade:{" "}
                        <span className="font-normal">
                          {" "}
                          {scheduling?.eventType.capacity}
                        </span>
                      </p>
                      <p className="font-medium">
                        Informaçoes Adicionais:
                        <span className="font-normal">
                          {scheduling?.eventType.arrivalInfo}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold uppercase">Messagem</h1>
                  <p>{scheduling?.message}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold uppercase">
                    ANFITRIÃO DA REUNIÃO
                  </h1>
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={scheduling.user.image ?? ""}
                      alt={scheduling.user.name ?? ""}
                    />
                    <AvatarFallback className="uppercase">
                      {scheduling.user?.name ? scheduling.user.name[0] : ""}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-muted ">
                  Criado em{" "}
                  {format(new Date(scheduling.date ?? ""), "dd/MM/yyyy")} por
                  MOKADO{" "}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ScheduledEventItem;
