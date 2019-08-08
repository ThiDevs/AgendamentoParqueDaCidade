using OpenQA.Selenium.Chrome;
using System;
using System.Threading;

namespace ParqueDaCidadeAPPChrome
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string nome = "Thiago Felicio Alves";
            string cpf = "17499711781";


            ChromeDriver driver = new ChromeDriver("C:\\");
            driver.Manage().Window.Maximize();
            string baseURL = "http://agendamento.serra.es.gov.br/";
            driver.Navigate().GoToUrl(baseURL);
            Thread.Sleep(2000);
            driver.FindElementByXPath("//*[@id=\"categoria\"]/option[3]").Click(); //Parque da Cidade
            Thread.Sleep(2000);
            driver.FindElementByXPath("//*[@id=\"servico\"]/option[3]").Click(); // Quadra 1
            driver.FindElementByXPath("//*[@id=\"escolha-servico\"]/div/div[2]/div/button").Click();

            Thread.Sleep(500);
            driver.FindElementByXPath("//*[@id=\"unidade\"]/option").Click();
            driver.FindElementByXPath("//*[@id=\"escolha-unidade\"]/div/div[2]/div/button[2]").Click();
            try
            {
                Thread.Sleep(1000);
                driver.FindElementByXPath("//*[@id=\"escolha-unidade\"]/div/div[2]/div/button[2]").Click();
            }
            catch (Exception) { }

            Thread.Sleep(4000);

            driver.FindElementByXPath("//*[@id=\"data\"]/option[2]").Click(); 
            Thread.Sleep(1000);
            driver.FindElementByXPath("//*[@id=\"horario\"]/option[1]").Click();

            driver.FindElementByXPath("//*[@id=\"nome\"]").SendKeys(nome);
            driver.FindElementByXPath("//*[@id=\"documento\"]/option").Click();
            driver.FindElementByXPath("//*[@id=\"numero\"]").SendKeys(cpf);
            driver.FindElementByXPath("//*[@id=\"seus-dados\"]/div/div[3]/div/button[2]").Click();

            driver.FindElementByXPath("/html/body/div[3]/div[7]/div/button").Click();




        }
    }
}
