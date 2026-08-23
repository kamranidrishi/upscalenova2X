import glob

for filepath in glob.glob("src/components/*.tsx"):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic string replace inside JSX
    content = content.replace("(₹12,999)", "({basePrice})")
    content = content.replace("(₹16,999)", "({proPrice})")
    content = content.replace("(₹24,999 Max Plan)", "({maxPrice} Max Plan)")
    content = content.replace("(₹24,999 Mega Plan)", "({maxPrice} Max Plan)")
    content = content.replace("(₹24,999)", "({maxPrice})")

    # RealEstateDemo had this: <div className="text-3xl font-black text-emerald-400 my-4">₹12,999</div>
    content = content.replace(">₹12,999<", ">{basePrice}<")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
