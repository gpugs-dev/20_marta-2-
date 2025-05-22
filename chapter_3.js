# Глава 3

# 1.1
age = 20  # Можно изменить возраст для проверки

if age >= 18:
    print("Можно купить алкоголь")
else:
    print("Нельзя купить алкоголь")
    
# 1.2
money = 500      # Сколько есть денег
price = 300      # Цена товара

if money >= price:
    print("Денег хватает на покупку")
else:
    print("Недостаточно денег для покупки")
    
# 1.3
print("Вариант 1: AB - пешком, BC - на автобусе (ждать 10 мин), CD - пешком")
print("Вариант 2: AD - весь путь пешком")

choice = 1  

if choice == 1:
    print("Идем пешком AB")
    print("Ждем автобус 10 минут")
    print("Едем на автобусе BC")
    print("Идем пешком CD")
else:
    print("Идем весь путь AD пешком")
    
# 1.4
a = 10
b = 7
c = 4
d = 1
x = 5  # Можно изменить для проверки

if x > a:
    print("x > a")
elif a > x > b:
    print("a > x > b")
elif b > x > c:
    print("b > x > c")
elif c > x > d:
    print("c > x > d")
else:
    print("x < d")