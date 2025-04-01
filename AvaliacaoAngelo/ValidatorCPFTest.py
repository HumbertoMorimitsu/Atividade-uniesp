import unittest
from validacao import validar_cpf
class TestValidacaoCPF(unittest.TestCase):
    print("Iniciando test")
    def test_cpf_valido(self):
        self.assertTrue(validar_cpf("529.982.247-25"))
        self.assertTrue(validar_cpf("11144477735"))

    def test_cpf_invalido(self):
        self.assertFalse(validar_cpf("123.456.789-00"))
        self.assertFalse(validar_cpf("111.111.111-11"))
        self.assertFalse(validar_cpf("00000000000"))

    def test_cpf_formatado(self):
        self.assertTrue(validar_cpf("529.982.247-25"))  # CPF válido formatado
        self.assertFalse(validar_cpf("529.982.247-24"))  # CPF inválido formatado

if __name__ == '__main__':
    unittest.main()
