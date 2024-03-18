class CurrencyConverter:
    def __init__(self):
        self.conversion_rates = {
            'USD': 1.0,    # 1 USD = 1 USD
            'CLP': 0.0014, # 1 USD = 0.0014 CLP
            'UF': 0.0292,  # 1 USD = 0.0292 UF
            'COP': 0.00029,# 1 USD = 0.00029 COP
            'ARS': 0.0105, # 1 USD = 0.0105 ARS
            'PEN': 0.240  # 1 USD = 0.240 PEN
        }

    def convert(self, amount, from_currency, to_currency):
        if from_currency not in self.conversion_rates:
            raise ValueError(f"Unknown currency: {from_currency}")
        if to_currency not in self.conversion_rates:
            raise ValueError(f"Unknown currency: {to_currency}")

        # Convert to USD first
        usd_amount = amount / self.conversion_rates[from_currency]

        # Convert from USD to target currency
        converted_amount = usd_amount * self.conversion_rates[to_currency]

        return converted_amount


# Example usage
def main():
    converter = CurrencyConverter()

    # Convert 20 USD to CLP
    amount_usd = 20
    amount_clp = converter.convert(amount_usd, 'USD', 'CLP')
    print(f"{amount_usd} USD is approximately {amount_clp:.2f} CLP")

    # Convert 346 CLP to USD
    amount_clp = 346
    amount_usd = converter.convert(amount_clp, 'CLP', 'USD')
    print(f"{amount_clp} CLP is approximately {amount_usd:.2f} USD")


if __name__ == "__main__":
    main()
