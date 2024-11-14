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
        let leaves = this.findChildLeaves();

        leaves.forEach(leaf => {
            let textContent = leaf.textContent;
            let replacedVowels = this.replaceOsWithEmoji(textContent);
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

    replaceOsWithEmoji(str) {
        let letters = str.split('');
        let replaced = letters.map(letter => {
            if(letter.toLowerCase() === 'o') {
                return getRandomEmoji();
            } else {
                return letter;
            }
        });
        return replaced.join('');
    }
}

RandomEmojifier.register();