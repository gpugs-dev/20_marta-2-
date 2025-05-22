# Глава 4

# 2.1 
for i in range(1, 11):
    print(i)
    
# 2.2
for i in range(1, 10):
    for j in range(1, 10):
        print(i * j, end=" ")
    print()
    
# 2.3
x = 0
for i in range(1):
    x = 2 + 2 * 2
print("x = " + x)

# 2.4
pi = 0
iterations = 100000  

for n in range(iterations):
    pi += (-1)**n / (2*n + 1)
pi *= 4

print("Приближенное значение Пи: " + pi)

# 2.5
# Функция для вычисления производной многочлена вида ax^n
function = "3x^2 + 2x + 1"  # Пример функции

# Разбиваем функцию на части
terms = function.split(" + ")

derivative = ""
for term in terms:
    if "x^" in term:
        coeff, power = term.split("x^")
        new_coeff = int(coeff) * int(power)
        new_power = int(power) - 1
        derivative += str(new_coeff) + "x^" + str(new_power) + " + "
    elif "x" in term:
        coeff = term.replace("x", "")
        if coeff == "":
            coeff = "1"
        derivative += coeff + " + "
    # Константы пропускаем (их производная 0)

derivative = derivative.rstrip(" + ")  # Убираем последний +
if derivative == "":
    derivative = "0"  # Если все были константы

print("Производная функции " + function + " равна: " + derivative)