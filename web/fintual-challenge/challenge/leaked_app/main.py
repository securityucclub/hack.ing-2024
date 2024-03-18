import random
import time


def generate_stock_data():
    symbols = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'FB']
    prices = [random.uniform(100, 500) for _ in range(len(symbols))]
    changes = [random.uniform(-5, 5) for _ in range(len(symbols))]
    return dict(zip(symbols, zip(prices, changes)))


def display_stock_market_screen():
    print("STOCK MARKET SCREEN\n")
    print("{:<10} {:<10} {:<10}".format("Symbol", "Price", "Change"))

    while True:
        stock_data = generate_stock_data()
        for symbol, (price, change) in stock_data.items():
            print("{:<10} {:<10.2f} {:<10.2f}".format(symbol, price, change))
        print("\n-----------------------------------\n")
        time.sleep(2)  # Simulating refresh every 2 seconds


display_stock_market_screen()
