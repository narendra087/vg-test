import { Inter } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ThemeToggler } from "@/components/theme-toggler";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const registerSchema = z.object({
    username: z.string().min(2).max(50),
    phone: z.string().min(10),
    password: z.string().min(6).max(16),
    password_confirm: z.string().min(6).max(16),
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>VG - Register</title>
      </Head>

      <main
        className={`bg-background relative flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="absolute top-5 flex flex-row justify-between align-baseline w-full px-5">
          <div>
            <Image
              src={"/vg-logo.webp"}
              alt="vg-logo"
              width={300}
              height={300}
            />
          </div>
          <div>
            <ThemeToggler />
          </div>
        </div>

        <section className="max-w-md w-full">
          <h1 className="text-5xl font-bold">Daftarkan Akun</h1>
          <p className="mt-5">Daftar akun anda dengan mengisi form dibawah</p>

          <div className="mt-10">
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ketik nama anda disini"
                          className="rounded-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Handphone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nomor handphone anda"
                          className="rounded-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Masukkan password anda"
                          className="rounded-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password_confirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Konfirmasi Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Masukkan kembali password anda"
                          className="rounded-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-full !mt-10">
                  Daftar Sekarang
                </Button>
              </form>
              <p className="text-center mt-10">
                Sudah punya akun? LogIn Sekarang
              </p>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}
