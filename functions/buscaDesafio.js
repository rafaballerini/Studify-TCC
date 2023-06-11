module.exports = {
	async buscaDesafio(numero) {
        const desafios = {
            1: "Encontre o número mais frequente em uma lista de números inteiros",
            2: "Calcule a soma de todos os números primos em uma lista de números",
            3: "Verifique se uma palavra é um palíndromo (pode ser lida da mesma forma de trás para frente)",
            4: "Conte o número de palavras em uma frase",
            5: "Verifique se uma lista está ordenada em ordem crescente",
            6: "Inverta uma string",
            7: "Calcule a média dos valores em uma lista numérica",
            8: "Encontre o maior número em uma matriz bidimensional",
            9: "Verifique se uma string contém apenas caracteres alfabéticos",
            10: "Calcule o fatorial de um número",
            11: "Verifique se uma lista contém números duplicados",
            12: "Classifique uma lista de palavras em ordem alfabética",
            13: "Determine se um número é um quadrado perfeito",
            14: "Verifique se uma string é um número válido",
            15: "Remova elementos duplicados de uma lista",
            16: "Verifique se dois strings são anagramas (possuem as mesmas letras, mas em ordem diferente)",
            17: "Verifique se uma matriz é uma matriz mágica (a soma de cada linha, coluna e diagonal é a mesma)",
            18: "Verifique se um número é primo",
            19: "Calcule a soma dos dígitos de um número",
            20: "Encontre o segundo maior número em uma lista",
            21: "Calcule o produto dos elementos em uma lista",
            22: "Verifique se uma matriz é simétrica (igual quando transposta)",
            23: "Determine se uma lista contém apenas números pares",
            24: "Encontre o número que falta em uma sequência de números",
            25: "Remova todos os espaços em branco de uma string",
            26: "Verifique se uma lista é um subconjunto de outra lista",
            27: "Encontre o menor número com a mesma quantidade de dígitos em uma lista",
            28: "Inverta a ordem dos elementos em uma lista",
            29: "Verifique se uma lista contém um valor específico",
            30: "Concatene duas strings",
            31: "Verifique se uma palavra é um anagrama palindrômico",
            32: "Encontre o número mais próximo de zero em uma lista",
            33: "Determine se uma matriz é uma matriz diagonal (possui zeros em todas as posições fora da diagonal principal)",
            34: "Verifique se uma string é uma sequência numérica válida",
            35: "Substitua todas as ocorrências de um caractere em uma string por outro caractere",
            36: "Verifique se uma lista de palavras contém apenas palavras com a mesma quantidade de caracteres",
            37: "Verifique se um número é um número de Armstrong (a soma dos cubos de seus dígitos é igual ao próprio número)",
            38: "Inverta a ordem das palavras em uma frase",
            39: "Verifique se uma lista de palavras forma um pangrama (contém todas as letras do alfabeto)",
            40: "Verifique se uma lista está ordenada em ordem decrescente",
            41: "Encontre a diferença simétrica entre duas listas (elementos que estão em uma lista ou outra, mas não em ambas)",
            42: "Verifique se uma string é um palíndromo de palavras (as palavras são palíndromos quando lidas de trás para frente)",
            43: "Determine o maior divisor comum (MDC) de dois números",
            44: "Verifique se um número é um número perfeito (a soma de seus divisores é igual ao próprio número)",
            45: "Calcule o valor absoluto de um número sem usar a função abs()",
            46: "Determine se uma string contém apenas vogais",
            47: "Encontre o menor múltiplo comum (MMC) de dois números",
            48: "Verifique se uma lista está ordenada de forma alternada (exemplo: 1, 3, 2, 4, 3, 5)",
            49: "Verifique se uma lista é um palíndromo",
            50: "Determine se um número é um número triangular (pode ser representado por um triângulo equilátero de pontos)",
            51: "Verifique se uma string é um anagrama de outra string",
            52: "Encontre o maior número primo em uma lista de números",
            53: "Conte o número de vezes que um determinado caractere aparece em uma string",
            54: "Verifique se uma matriz é uma matriz identidade (possui uns na diagonal principal e zeros nas outras posições)",
            55: "Determine se um número é um quadrado mágico (a soma de cada linha, coluna e diagonal é a mesma)",
            56: "Verifique se um número é um número de Fibonacci",
            57: "Encontre o número mais frequente em uma string",
            58: "Determine se uma lista contém apenas números ímpares",
            59: "Calcule a soma dos dígitos ao quadrado de um número",
            60: "Verifique se uma string é um palíndromo numérico (os dígitos são palíndromos quando lidos de trás para frente)",
            61: "Encontre o elemento que aparece uma única vez em uma lista, onde todos os outros elementos aparecem duas vezes",
            62: "Verifique se uma lista é uma lista cíclica (o último elemento aponta para o primeiro)",
            63: "Determine se uma palavra é um isograma (não possui letras repetidas)",
            64: "Verifique se uma matriz é uma matriz antissimétrica (os elementos fora da diagonal principal são negativos da transposta)",
            65: "Encontre o número que ocorre o maior número de vezes em uma lista",
            66: "Verifique se uma string é uma sequência de caracteres consecutivos",
            67: "Determine se uma lista é uma permutação de outra lista",
            68: "Encontre o elemento de maior valor em uma matriz",
            69: "Verifique se uma lista é uma lista de repetições consecutivas (todos os elementos são iguais ou há uma única repetição)",
            70: "Calcule a soma dos números presentes em uma string",
            71: "Verifique se uma palavra é um pangrama perfeito (contém todas as letras do alfabeto exatamente uma vez)",
            72: "Determine se um número é um número de Harshad (é divisível pela soma de seus dígitos)",
            73: "Verifique se uma lista está ordenada de forma estritamente crescente (sem elementos iguais)",
            74: "Determine se uma palavra é um isograma perfeito (não possui letras repetidas, nem mesmo em diferentes casos)",
            75: "Verifique se um número é um número abundante (a soma de seus divisores é maior que o próprio número)",
            76: "Calcule o produto escalar de duas listas numéricas",
            77: "Verifique se uma string é uma sequência alfanumérica válida (contém apenas letras e números)",
            78: "Determine se um número é um número harmônico (a soma dos inversos dos seus divisores é um número inteiro)",
            79: "Verifique se uma matriz é uma matriz de Vandermonde (os elementos de cada linha são potências de uma sequência)",
            80: "Encontre o segundo menor número em uma lista",
            81: "Determine se uma lista é uma lista de repetições alternadas (os elementos se repetem em um padrão ABABAB)",
            82: "Verifique se uma palavra é um heterograma (não possui letras repetidas)",
            83: "Calcule o máximo divisor comum (MDC) de uma lista de números",
            84: "Verifique se uma matriz é uma matriz de Toeplitz (os elementos em cada diagonal são iguais)",
            85: "Determine se uma palavra é um lipograma (não contém uma determinada letra ou conjunto de letras)",
            86: "Encontre o número de combinações possíveis em um jogo de cartas",
            87: "Verifique se uma lista de palavras forma uma sequência de anagramas (cada palavra é um anagrama da anterior)",
            88: "Calcule a soma dos números primos em um intervalo específico",
            89: "Verifique se uma matriz é uma matriz diagonalmente dominante (a magnitude do elemento diagonal é estritamente maior que a soma dos outros elementos da mesma linha)",
            90: "Determine se uma lista é uma lista de números perfeitos (a soma de seus divisores é igual ao próprio número)",
            91: "Verifique se uma palavra é uma tautograma (todas as palavras começam com a mesma letra)",
            92: "Encontre o elemento de menor valor em uma matriz",
            93: "Determine se uma palavra é um tautograma aliterativo (todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            94: "Verifique se uma matriz é uma matriz escada (todos os elementos abaixo da diagonal principal são iguais a zero)",
            95: "Encontre o número de maneiras diferentes de pagar uma determinada quantia com moedas de diferentes valores",
            96: "Determine se uma palavra é um lipograma pangramático (não contém uma determinada letra ou conjunto de letras, mas ainda contém todas as letras do alfabeto)",
            97: "Verifique se uma matriz é uma matriz positiva definida (todos os seus autovalores são positivos)",
            98: "Encontre o k-ésimo menor número em uma lista",
            99: "Determine se uma lista é uma lista de números abundantes (a soma de seus divisores é maior que o próprio número)",
            100: "Verifique se uma palavra é um tautograma pangramático (todas as palavras começam com a mesma letra e contém todas as letras do alfabeto)",
            101: "Calcule o produto cruzado de dois vetores tridimensionais",
            102: "Determine se uma matriz é uma matriz de Cauchy (os elementos são o inverso do produto das coordenadas)",
            103: "Verifique se uma lista é uma lista de números quadrados perfeitos",
            104: "Encontre o número de palavras palindrômicas em uma lista de palavras",
            105: "Determine se uma palavra é um palíndromo de palavras (as palavras são palíndromos quando lidas de trás para frente)",
            106: "Verifique se uma matriz é uma matriz esparsa (a maioria de seus elementos são zeros)",
            107: "Verifique se uma palavra é um heterograma isogramático (não possui letras repetidas e não contém uma determinada letra ou conjunto de letras)",
            108: "Calcule a soma dos elementos em uma matriz triangular superior",
            109: "Determine se uma lista é uma lista de números cúbicos",
            110: "Verifique se uma palavra é um palíndromo anagramático (as letras podem ser rearranjadas para formar um palíndromo)",
            111: "Encontre a média dos elementos em uma matriz de números reais",
            112: "Verifique se uma palavra é uma sequência de letras consecutivas",
            113: "Determine se uma lista é uma lista de números primos",
            114: "Encontre o elemento de menor valor em uma matriz de números reais",
            115: "Verifique se uma palavra é uma isograma de palavra (não possui letras repetidas, nem mesmo em diferentes casos, e não contém uma determinada letra ou conjunto de letras)",
            116: "Calcule a soma dos elementos nas diagonais secundárias de uma matriz",
            117: "Verifique se uma palavra é um pangrama heterogramático (contém todas as letras do alfabeto, não possui letras repetidas e não contém uma determinada letra ou conjunto de letras)",
            118: "Determine se uma lista é uma lista de números fibonacci",
            119: "Verifique se uma palavra é um anagrama isogramático (as letras podem ser rearranjadas para formar uma palavra sem letras repetidas)",
            120: "Encontre o elemento que ocorre com mais frequência em uma matriz",
            121: "Determine se uma matriz é uma matriz escalar (todos os elementos fora da diagonal principal são iguais a zero)",
            122: "Verifique se uma palavra é um palíndromo heterogramático (pode ser lida de trás para frente, não possui letras repetidas e não contém uma determinada letra ou conjunto de letras)",
            123: "Calcule o produto interno de dois vetores",
            124: "Determine se uma lista é uma lista de números triangulares",
            125: "Verifique se uma palavra é um tautograma isogramático (todas as palavras começam com a mesma letra, não possui letras repetidas e não contém uma determinada letra ou conjunto de letras)",
            126: "Encontre o número de vezes que um determinado caractere aparece em uma matriz de strings",
            127: "Determine se uma matriz é uma matriz involutória (quando multiplicada por ela mesma, resulta na matriz identidade)",
            128: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos",
            129: "Calcule a soma dos dígitos fatoriais de um número",
            130: "Determine se uma lista é uma lista de números quadrados mágicos (a soma de cada linha, coluna e diagonal é a mesma e todos os elementos são quadrados perfeitos)",
            131: "Verifique se uma palavra é uma isograma de palavra aliterativa (não possui letras repetidas, nem mesmo em diferentes casos, e todas as palavras começam com a mesma letra)",
            132: "Encontre o maior prefixo comum entre duas strings",
            133: "Determine se uma matriz é uma matriz escalonada (todos os elementos abaixo da diagonal principal são iguais a zero e o primeiro elemento não nulo de cada linha está à direita do primeiro elemento não nulo da linha anterior)",
            134: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos sem repetição",
            135: "Verifique se uma palavra é um pangrama heterogramático isogramático (contém todas as letras do alfabeto, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras e todas as palavras começam com a mesma letra)",
            136: "Calcule a soma dos elementos em uma matriz triangular inferior",
            137: "Determine se uma lista é uma lista de números permutação",
            138: "Verifique se uma palavra é um palíndromo heterogramático isogramático (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras e todas as palavras começam com a mesma letra)",
            139: "Encontre a média dos elementos em uma matriz triangular superior",
            140: "Verifique se uma palavra é uma sequência de caracteres consecutivos não repetidos",
            141: "Determine se uma lista é uma lista de números palindrômicos",
            142: "Encontre o elemento de maior valor em uma matriz de números inteiros",
            143: "Verifique se uma palavra é um isograma de palavra heterogramático (não possui letras repetidas, nem mesmo em diferentes casos, não contém uma determinada letra ou conjunto de letras e todas as palavras começam com a mesma letra)",
            144: "Calcule a soma dos elementos nas diagonais secundárias de uma matriz de números inteiros",
            145: "Verifique se uma palavra é um palíndromo heterogramático isogramático (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras e todas as palavras começam com a mesma letra)",
            146: "Determine se uma matriz é uma matriz de Jordan (possui blocos diagonais de Jordan)",
            147: "Verifique se uma palavra é um anagrama heterogramático (as letras podem ser rearranjadas para formar uma palavra sem letras repetidas, não contém uma determinada letra ou conjunto de letras)",
            148: "Encontre o elemento que ocorre com menos frequência em uma matriz de números inteiros",
            149: "Determine se uma matriz é uma matriz escalar ou uma matriz identidade",
            150: "Verifique se uma palavra é um palíndromo heterogramático isogramático aliterativo (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            151: "Calcule o produto cartesiano de duas listas",
            152: "Determine se uma lista é uma lista de números quadrados mágicos perfeitos (a soma de cada linha, coluna e diagonal é a mesma, todos os elementos são quadrados perfeitos e a lista é um número perfeito)",
            153: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos não repetidos",
            154: "Encontre o maior sufixo comum entre duas strings",
            155: "Determine se uma matriz é uma matriz estocástica (todos os elementos são não negativos e a soma de cada coluna é igual a 1)",
            156: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos não repetidos com a mesma aliteração",
            157: "Calcule a soma dos dígitos fatoriais de um número inteiro",
            158: "Determine se uma lista é uma lista de números quadrados mágicos perfeitos ordinais (a soma de cada linha, coluna e diagonal é a mesma, todos os elementos são quadrados perfeitos e a lista é um número perfeito e está em ordem ordinal)",
            159: "Verifique se uma palavra é um palíndromo heterogramático isogramático aliterativo palíndromo (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra, têm a mesma aliteração e são palíndromos)",
            160: "Encontre o menor sufixo comum entre duas strings",
            161: "Determine se uma matriz é uma matriz de Hess (os elementos abaixo da segunda subdiagonal são iguais a zero)",
            162: "Verifique se uma palavra é um pangrama heterogramático isogramático aliterativo (contém todas as letras do alfabeto, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            163: "Calcule o produto vetorial de dois vetores tridimensionais",
            164: "Determine se uma lista é uma lista de números repdigit (todos os números possuem dígitos repetidos)",
            165: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos não repetidos com a mesma aliteração palindrômica",
            166: "Encontre o elemento que ocorre apenas uma vez em uma matriz de números inteiros, onde todos os outros elementos ocorrem duas vezes",
            167: "Determine se uma matriz é uma matriz escalar ou uma matriz antissimétrica",
            168: "Verifique se uma palavra é um tautograma isogramático aliterativo (todas as palavras começam com a mesma letra, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras e têm a mesma aliteração)",
            169: "Calcule a soma dos elementos em uma matriz tridiagonal",
            170: "Determine se uma lista é uma lista de números felizes (a soma dos quadrados dos dígitos converge para 1)",
            171: "Verifique se uma palavra é um palíndromo heterogramático isogramático aliterativo palindrômico (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra, têm a mesma aliteração e são palíndromos)",
            172: "Encontre o segundo maior elemento em uma matriz de números inteiros",
            173: "Determine se uma matriz é uma matriz de Moler (possui a forma A = I + uv^T, onde I é a matriz identidade, u e v são vetores não nulos)",
            174: "Verifique se uma palavra é uma sequência de caracteres alfanuméricos consecutivos não repetidos com a mesma aliteração palindrômica",
            175: "Calcule o produto escalar de dois vetores de matrizes",
            176: "Determine se uma lista é uma lista de números primos cônicos (os elementos formam um padrão cônico)",
            177: "Verifique se uma palavra é um tautograma isogramático aliterativo pangramático (todas as palavras começam com a mesma letra, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, têm a mesma aliteração e contém todas as letras do alfabeto)",
            178: "Verifique se uma palavra é um isograma de palavra heterogramático isogramático (não possui letras repetidas, nem mesmo em diferentes casos, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e não contém letras repetidas)",
            179: "Calcule a soma dos elementos em uma matriz esparsa (matriz com a maioria dos elementos iguais a zero)",
            180: "Determine se uma lista é uma lista de números não decrescente (cada elemento é maior ou igual ao elemento anterior)",
            181: "Verifique se uma palavra é um palíndromo heterogramático isogramático aliterativo (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            182: "Encontre o elemento de maior valor em uma matriz de números reais",
            183: "Verifique se uma palavra é uma sequência de caracteres consecutivos não repetidos com a mesma aliteração pangramática",
            184: "Determine se uma lista é uma lista de números perfeitos (a soma de seus divisores próprios é igual ao próprio número)",
            185: "Encontre o elemento de menor valor em uma matriz de números inteiros",
            186: "Verifique se uma palavra é um anagrama heterogramático isogramático aliterativo (as letras podem ser rearranjadas para formar uma palavra sem letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            187: "Calcule a soma dos elementos nas diagonais secundárias de uma matriz de números reais",
            188: "Verifique se uma palavra é um palíndromo heterogramático isogramático aliterativo pangramático (pode ser lida de trás para frente, não possui letras repetidas, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra, têm a mesma aliteração e contém todas as letras do alfabeto)",
            189: "Determine se uma matriz é uma matriz de Pascal (cada elemento é a soma dos elementos acima e à esquerda)",
            190: "Verifique se uma palavra é um isograma de palavra heterogramático aliterativo (não possui letras repetidas, nem mesmo em diferentes casos, não contém uma determinada letra ou conjunto de letras, todas as palavras começam com a mesma letra e têm a mesma aliteração)",
            191: "Encontre o elemento que ocorre com menos frequência em uma matriz de números inteiros não negativos",
            192: "Determine se uma matriz é uma matriz antissimétrica (a matriz transposta é igual à matriz negativa)",
            193: "Verifique se uma palavra é uma sequência de caracteres consecutivos não repetidos com a mesma aliteração pangramática palindrômica",
            194: "Calcule o produto escalar de dois vetores de matrizes de números inteiros",
            195: "Determine se uma lista é uma lista de números quadrados perfeitos cúbicos (os elementos são quadrados perfeitos e cúbicos perfeitos)",
        };

        return desafios[numero]
    },
};



