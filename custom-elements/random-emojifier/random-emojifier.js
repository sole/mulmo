import getRandomEmoji from "../../lib/getRandomEmoji/getRandomEmoji.js";

export default class RandomEmojifier extends HTMLElement {
	static tagName = "random-emojifier";

	static register(tagName) {
		if (!("customElements" in globalThis)) {
			return;
		}
		customElements.define(tagName || this.tagName, this);
	}

	connectedCallback() {
		this.render();
	}


	async render() {
        let nodes = this.children;
        console.log(nodes);
        console.log(this.childNodes, Array.from(this.children))
        let leaves = this.findChildLeaves();
        console.log(leaves);
        leaves.forEach(leaf => {
            let textContent = leaf.textContent;
            console.log(textContent);
            let replacedVowels = this.replaceVowelsWithEmoji(textContent);
            leaf.textContent = replacedVowels;
        });
	}

    findChildLeaves() {
        let children = Array.from(this.children);

        let leaves = children.filter(child => {
            return child.childElementCount === 0 && 
                child.firstChild !== null &&
                child.firstChild.nodeType === Node.TEXT_NODE;
            });
        return leaves;
    }

    replaceVowelsWithEmoji(str) {
        let vowels = 'aeiou'.split('');
        let letters = str.split('');
        let replaced = letters.map(letter => {
            if(vowels.indexOf(letter) !== -1) {
                return getRandomEmoji();
            } else {
                return letter;
            }
        });
        return replaced.join('');
    }
}

RandomEmojifier.register();