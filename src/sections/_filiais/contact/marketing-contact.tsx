"use client";

import * as React from "react";

import type { z } from "zod";

import { useForm } from "react-hook-form";

import { Check } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Divider } from "@/components/catalyst-ui-kit/typescript/divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { MarketingContactSchema } from "lib/schema";

import SuccessAlert from "@/components/success-alert/success-alert";

//-----------------------------------------------------------------------------------------
export type IFormInput = z.infer<typeof MarketingContactSchema>;

// import zod schema
//------------------------------------------------------------------------------------------
export function MarketingContact() {
  const defaultValues: IFormInput = {
    id: "",
    filiais: "",
    outros: "",
    email: "",
    empresa: "",
    nome: "",
    cel: "",
  };

  const methods = useForm<IFormInput>({
    resolver: zodResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(MarketingContactSchema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    alert(SuccessAlert());
  };

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     reset();
  //     console.info("DATA", data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

  return (
    <section className="relative py-12">
      <Divider soft className="flex justify-center mb-20 align-middle bg-gray-800" />
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]" />
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.5)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_10%,transparent_50%)]" />
      <div className="container grid w-full grid-cols-1 ml-20 overflow-hidden gap-x-32 lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Fale com um de nossos{" "}
              <div className="mt-5 text-blue-600 ">
                <h1>Consultores</h1>
              </div>
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
              In non libero bibendum odio pellentesque ullamcorper. Aenean condimentum, dolor
              commodo pulvinar bibendum.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="pb-20 space-y-16 lg:pb-0">
              <div className="space-y-6">
                <div className="flex mt-16 ml-3 overflow-hidden">
                  <Avatar className="size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-10 space-y-4">
                  <p className="ml-3 text-sm font-semibold">O que esperar:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-6 shrink-0 text-muted-foreground" />
                    <p className="text-md">Consultores altamente qualificados</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-6 shrink-0 text-muted-foreground" />
                    <p className="text-md">Estratégias para melhorar seu negócio</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-6 shrink-0 text-muted-foreground" />
                    <p className="text-md">Respostas para todos os seus casos de uso</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center ml-3 space-x-12">
                {/* <img
                  src="https://shadcnblocks.com/images/block/logos/astro.svg"
                  alt="placeholder"
                  className="h-6"
                />
                <img
                  src="https://shadcnblocks.com/images/block/logos/shadcn-ui.svg"
                  alt="placeholder"
                  className="h-6"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full min-w-[20rem] max-w-[30rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full px-6 py-10 mb-6 space-y-6 shadow-md rounded-xl border-border bg-slate-800">
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="nome">Nome Completo</label>
                  </div>
                  <Input
                    className="border-gray-500 opacity-75 text-slate-700"
                    {...register("nome")}
                    id="nome"
                    name="nome"
                    placeholder="José Silva"
                  />
                </div>
                {errors?.nome?.message && (
                  <p className="mb-4 text-sm text-orange-600">{errors.nome.message}</p>
                )}
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="empresa">Empresa </label>
                    <span className="text-muted-foreground">(Opcional)</span>
                  </div>
                  <Input
                    className="border-gray-500 opacity-75 text-slate-700"
                    {...register("empresa")}
                    id="empresa"
                    name="empresa"
                    placeholder="Fradema"
                  />
                </div>

                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="cel">Celular</label>
                  </div>
                  <Input
                    className="border-gray-500 opacity-75 text-slate-700"
                    {...register("cel")}
                    type="number"
                    id="cel"
                    name="cel"
                    placeholder="(xx)99888-7766"
                  />
                </div>
                {errors?.cel?.message && (
                  <p className="mb-2 text-sm text-orange-600">{errors.cel.message}</p>
                )}
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="email">Email </label>
                      {/* <span className="text-muted-foreground"></span> */}
                    </div>
                    <Input
                      className="border-gray-500 opacity-75 text-slate-700"
                      {...register("email")}
                      id="email"
                      name="email"
                      type="text"
                      placeholder="nome@empresa.com"
                    />
                  </div>
                  {errors?.email?.message && (
                    <p className="mb-4 text-sm text-orange-600">{errors.email.message}</p>
                  )}
                  <div>
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="filiais">Filial Fradema</label>
                    </div>
                    <Select {...register("filiais")}>
                      <SelectTrigger
                        className="border-gray-500 opacity-75 text-slate-700"
                        id="filiais"
                        name="filiais"
                      >
                        <SelectValue className="opacity-75" placeholder="Selecione" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="rj">Fradema - RJ</SelectItem>
                        <SelectItem value="sp">Fradema - SP</SelectItem>
                        <SelectItem value="campinas">Fradema - Campinas</SelectItem>
                      </SelectContent>
                      {/* {errors?.filiais?.message && (
                        <p className="mb-4 text-sm text-orange-600">{errors.filiais.message}</p>
                      )} */}
                    </Select>
                  </div>

                  {/* <div>
                <div className="mb-2.5 text-sm font-medium">
                  <label htmlFor="companySize">Company size</label>
                </div>
                <Select>
                  <SelectTrigger id="companySize" name="companySize">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="200+">200+</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
                  <div className="mt-5">
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="id">
                        Como descobriu a Empresa ?{" "}
                        <span className="text-muted-foreground">(Opcional)</span>
                      </label>
                    </div>
                    <Select>
                      <SelectTrigger
                        className="border-gray-500 opacity-75 text-slate-700"
                        id="outros"
                        name="outros"
                      >
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web</SelectItem>
                        <SelectItem value="clientes">Outros clientes</SelectItem>
                        <SelectItem value="redes">Redes sociais</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col justify-end w-full pt-2 space-y-3">
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      className="mt-5 text-white bg-blue-600 text-md hover:bg-blue-700"
                      type="submit"
                    >
                      Enviar formulário
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      Seus dados serão vistos e armazenados somente pela empresa. Para saber mais,
                      leia nossa{" "}
                      <a href="#" className="underline">
                        política de segurança
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
